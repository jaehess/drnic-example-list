// ==========================================================================
// Project:   Drnic
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Drnic */

Drnic = SC.Application.create({
  store: SC.Store.create().from(SC.Record.fixtures)
});

Drnic.List = SC.Record.extend({
  title: SC.Record.attr(String),
  lists: SC.Record.toMany("Drnic.List", {
    inverse: "list", isMaster: YES
  })
});

Drnic.List.FIXTURES = [
  { guid: 1, title: "One", lists: [2, 3] },
  { guid: 2, title: "One - One", list: 1 },
  { guid: 3, title: "One - Two", list: 1 },
  { guid: 4, title: "Two" }
];

Drnic.listsController = SC.ArrayController.create({
})

SC.ready(function() {

  var query = SC.Query.local(Drnic.List, {conditions: 'list = undefined'});

  Drnic.listsController.set('content', Drnic.store.find(query));

  Drnic.mainPane = SC.TemplatePane.append({
    layerId: 'drnic',
    templateName: 'drnic'
  });
});
