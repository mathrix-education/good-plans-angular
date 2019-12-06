# Good Plans Angular
This repo is the client of the project "Good Plans" a project made by
Mathrix for the "Nuit de l'info", a French coding event.

It is based on Angular 8 and heavily relies on
[@clr/angular](https://www.npmjs.com/package/@clr/angular) for the UI
integration.

It coupled with a REST API, which you can found at :

- [dev.api.good-plans.mathrix.fr] (development API)
- [api.good-plans.mathrix.fr] (production API)

To build the Docker image, you have to first build the Angular app. To
do so, run:

```bash
npm install # install the Node dependencies
ng build --configuration=dev # or master, if you want to use our prod API 
```

Then, you can build the Docker image with:
```bash
docker build -t good-plans-angular:latest .
```

Then, serve the app with:
```bash
docker run good-plans-angular:latest
```

You can customize the port by passing the `PORT` environment variable.

