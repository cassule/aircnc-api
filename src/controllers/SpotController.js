module.exports = {
  async store (req, res) {
    console.log(req.body)
    console.log(req.file)

    return res.send({ ok: true })
  }
}
