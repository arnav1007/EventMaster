Deployed Link:https://event-master-bice.vercel.app/

This is an Event Management Platform that provides the functioanlity to register events to the user. Users can edit and delete the events as well.

Technologies Used: React, Redux, Material UI

App has following 3 pages:

1.Landing page: ->It has a small description and features of the app.
->It has 2 buttons for registering and exploring events.

2.EventsListing ->It has a tab for switching to Table View & Cards View
->Also has a filter for applying date.
->By default 6 events are listed.(Already Stored in Redux)

3.EventRegistra ->It opens up a form to register events.
tion

Components used are:
1.Navbar -> Has 3 links for large screens and a hamburger Menu for mobile screens.
2.Footer -> Has contact details and links.
3.EventsCard-> Has all the deatils presnt in Cards View.
4.EventsTable-> Gives a tabular view for the events.

Redux:
Configured a store.
It just has a single slice - EventSlice.

Functioanlities: Add Event, Delete Event, Edit Event.

The designs are fuly responsive.
