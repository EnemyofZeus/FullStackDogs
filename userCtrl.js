module.exports = {
  login: function(req, res, next){
    res.send();
  },
  getUser: function(req, res, next) {
    userModel.findById(req.user_id).exec(function(err, result){
      if(err) return res.send(err);
      res.send(result);
    })
  }
};
