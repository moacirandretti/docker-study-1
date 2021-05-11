module.exports = class MyController {
  showUser (request, response) {
    const { name, age } = request.body

    return response.status(200).json({
      msg: 'User Found',
      name,
      age
    })
  }
}
