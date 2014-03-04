#What's oneapp.js?
Today, building client side application is getting more common. Oneapp.js aims to create an MVC framework of doing this, that eventually help developers to reduce development cycle and ensure the final result is easy for future maintenance.
 
#Inspiration
oneapp is heavily inspired by Ruby on Rails (RoR). It is adopting the simple and well-thought folder structure of RoR. By doing so, it would be super easy for RoR developer to guess which files driving a behaviour. For non-RoR developers, I would suggest to learn the folder structures, and be familiar with it.
Of course, it won't be exactly the same as Ruby on Rails. Some trade-offs are happening here ~ since oneapp is building client side app, and RoR is server oriented.

#Ingredients
I have picked what I thought as best ingredients in JavaScript, like crossroads.js , zepto.js, requirejs, underscore.js ~ to be part of oneapp. These libraries are not just great, but also very light. Well, I built this with mobile app requirments as the main ask, so light libraries are preferred. 
Thanks to the creators and open source developers!

#Getting Started
As in all JavaScript library, oneapp would only introduce 1 global variable. Here we have global variable called HP , as an attribute to HP, the place where I work at while creating this.

As I said the folder structure is very similar to RoR app.
To start with, here are some of the important folders and files

<i>
<br/>/app/models
<br/>/app/views
<br/>/app/controllers
<br/>/app/templates
<br/>/config/route.js
</i>

## Model
Inside /app/models developer could create model files. 
Model in MVC model is responsible to do backend interaction. Thus, in these m-* files you may create functions that getting data from backend, e.g. via AJAX.

In this samples project, we have <code>m-contact</code> and <code>m-account</code>.
Within these files, I created few functions such as
<i>
<br/>HP.M.Contact.list
<br/>HP.M.Account.list
</i>
<br/>to retrieve list of Contact and Account respectively. Please note that we using HP namespace as global variable, followed by M (to identify these are models), followed by the entity i.e. Contact / Account , then finally by the "verb" of the data.

## Controller
<br>The brain of the application are located in <code>controller</code> files. They should be prefixed with <b>c-</b> and located at <code>/app/controllers</code> folder.
In this example we have few controller functions such as
<i>
<br/>HP.C.Contact.list
<br/>HP.C.Account.lookup
</i> 
<br/>Please note above namespace convention of using <b>HP</b> and <b>C</b>. On top of that, pay attention that I always try to use the same verb i.e. <b>list</b> both in Model and Controller function. It will happen the same thing (i.e. use <b>list</b>) in View class. Please try to follow the same, and let our brain work for other things (by not creating different verb across M , V , and C functions).

## View
The idea of MVC is the controller will issue the instruction. Normally the instruction would be, <i>first</i> get the data, then <i>second</i> display it. With this assumption, let's see inside <code>HP.C.Contact.list</code> function.
<code>
```javascript
controller.list = function() {
	HP.M.Contact.list(HP.V.Contact.list);	
}
```
</code>

<br>Above one-line code is invoking <code>HP.M.Contact.list</code> function and passing <code>HP.V.Contact.list</code> as the callback argument.
So now we know that we have view functions. Similar to before, they are created using HP.V namespace. V functions is responsible to display data in the page, and ensure the page will respond (to click, slide, etc) accordingly. It sounds a lot here right? Luckily, underscore library has solution called templating. Using templating, we could create templates to reduce the burden of V functions.

## Templates
Templates are located inside <code>/app/templates</code> folder. It will have subfolder within it, since I would anticipate we could have many files for let's say contact related only. Please always use subfolders within the templates.
The templating engine we're using here is underscore templating engine.

## Route
There is important glue of above all, that is <b>route</b>. A route is mapped to a controller function. Let's say "contact/list" route is mapped to HP.C.Contact.list function. This mapping is defined inside <code>/app/config/route.js</code>. And how to ensure a UI element to be associated with certain route. Let's say if we want a hyperlink to display list of contact? This is done easily by putting route attribute with the element i.e. route="contact/list"





 

