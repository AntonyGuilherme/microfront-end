## Why?

If you want to use a SPA on your .NET application. Always remember: it is just a POC, so if you want to do a thing like that, do it in the right way, OK mate?
This is intended to behave as a microfrontend, but if we need it as SPA too. Without any modification to the angular SPA.

## Config the "Local CDN"
 You will need to install the http-server lib. For that execute npm install --global http-server. 
 This will install the http-server globally, but if you wish it's possible to install it locally. 
 You can find more information through the npm package's page [HTTP-SERVER PACKAGE PAGE](https://www.npmjs.com/package/http-server);

## Run

To run this project you have two options:

option 1: Run this project using the http-server, to do it you just need to go to the folder cdn-server and execute npm run start.
This command will build the application and start the http-server. If you had no trouble you will be able to access the application
using http://127.0.0.1:8080.

option 2: Run this project as a SPA, for that, you just need to run ng serve or npm run start.

## .NET configuration

On your .NET MVC project, we will need:

# Add a controller to receive all requests for our SPA application

```c#
public class HomeController : Controller
{
        //This action will receive all requests and move forward to our SPA application 
        [Route("/[controller]/{*anything}")]
        public ActionResult Index()
        {
            return View(new RouteEntryPoint(Request.Path, Request.Query));
        }
}
```

# Add the controller route registration

```c#
app.MapControllerRoute(
    name: "entry-point-configuration",
    pattern: "{controller=Home}");
```

# Add the entry-point router model, to help us move forward with the request data 

```c#
# I know that it's bad, but it's just a POC, so chill mate
# As an exercise you can refactor this code with some unit tests ( use TDD for your benefit). I deeply recommend that.
public class RouteEntryPoint
    {
        public List<string> _Path_Angular { get; internal set; } = new List<string>();
        public string Path_Angular => string.Join("/",_Path_Angular).ToLower();
        public Dictionary<string, string> Params { get; internal set; } = new Dictionary<string, string>();

        public RouteEntryPoint(string uri, IQueryCollection component_params)
        {
            IEnumerable<string> path = uri.Split('/');

            foreach (string chunk in path)
                if (!string.IsNullOrEmpty(chunk))
                    _Path_Angular.Add(chunk);

            foreach (string key_param in component_params.Keys)
                Params.Add(key_param, component_params[key_param][0]);
        }
    }
```

# Add the view or page that will work as a container for our SPA

```cshtml
@using LunaApplication.Models
@model RouteEntryPoint

<script>
    # This will be the expected path for a component in your route config at the angular project
    const path = '@Model.Path_Angular';

    # This will be query params in your route
    const params = JSON.parse('@Html.Raw(Json.Serialize(Model.Params))');

    window._get_entry_point = function () { return path };

    window._get_entry_point_params = function () { return params };

</script>

# Yeah, I know this is exactly the index.html created by the angular build, but it's simple and works.
<html lang="en" data-critters-container>
<head>
    <meta charset="utf-8">
    <title>Luna</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    # Here you can see the request to our "CND"
    <link rel="stylesheet" href="http://localhost:8080/styles.css">
</head>
<body>
    <app-root></app-root>
    # Here you can see the request to our "CND"
    <script src="http://localhost:8080/runtime.js"></script>
    <script src="http://localhost:8080/polyfills.js"></script>
    <script src="http://localhost:8080/main.js"></script>
</body>
</html>

```
