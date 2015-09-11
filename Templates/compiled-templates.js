(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"#\" id=\"logout\">Logout</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<h3>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n<p>"
    + alias3(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"comments","hash":{},"data":data}) : helper)))
    + "</p>\n\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.currentUser : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<a href=\"login\">Login</a>\n<a href=\"singUp\">Signing Up</a>";
},"useData":true});
templates['login'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<h1>Hola login</h1>\n<form id=\"login\">\n	<input type=\"text\" name=userEmail value=\""
    + alias3(((helper = (helper = helpers.userEmail || (depth0 != null ? depth0.userEmail : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"userEmail","hash":{},"data":data}) : helper)))
    + "\">\n	<input type=\"text\" name=userPassword value=\""
    + alias3(((helper = (helper = helpers.password || (depth0 != null ? depth0.password : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"password","hash":{},"data":data}) : helper)))
    + "\">\n	<button>Login</button>\n</form>";
},"useData":true});
templates['singUp'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<h1>Hola singUp</h1>\n<form id=\"singUp\">\n	<input type=\"text\" name=userEmail value=\""
    + alias3(((helper = (helper = helpers.userEmail || (depth0 != null ? depth0.userEmail : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"userEmail","hash":{},"data":data}) : helper)))
    + "\">\n	<input type=\"text\" name=userPassword value=\""
    + alias3(((helper = (helper = helpers.password || (depth0 != null ? depth0.password : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"password","hash":{},"data":data}) : helper)))
    + "\">\n	<button>Sign Up!</button>\n</form>";
},"useData":true});
})();