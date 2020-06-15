const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type DevArticles implements Node {
      article: Frontmatter
      cover: File @link(from: "cover___NODE")
    }

    type Frontmatter {
        cover_image: String
        title: String
        readable_publish_date: String
        description: String
        url: String
        tag_list: String
      }
  `)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  // For all DevNode nodes that have a featured image url, call createRemoteFileNode
  if (
    node.internal.type === "DevArticles" &&
    node.article.cover_image !== null
  ) {
    let fileNode = await createRemoteFileNode({
      url: node.article.cover_image, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's redux store
    })

    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.cover___NODE = fileNode.id
    }
  }
}
