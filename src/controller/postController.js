const { POST, TAGS } = require('./../model')
exports.createPostWithTags = async (req, res) => {
  try {
    const { title, content, tags } = req.body
    const post = await POST.create({ title, content })
    const tagInstances = await Promise.all(
      tags.map((tagName) =>
        TAGS.findOrCreate({
          where: { name: tagName },
        }).then(([tag]) => tag)
      )
    )
    // Associate Tags with Post
    await post.addTags(tagInstances)
    res.status(201).json({ post, tags: tagInstances })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
