const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type DevNode implements Node {
      frontmatter: Frontmatter
      cover: File @link(from: "cover___NODE")
    }

    type Frontmatter {
        cover: String
        title: String
        publish_date: String
        description: String
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
  if (node.internal.type === "DevNode" && node.frontmatter.cover !== null) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.cover, // string that points to the URL of the image
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
