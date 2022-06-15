var options = {
  valueNames: ["question", "answer"],
};
var faqList = new List("dbod", options);
var noItems = $(
  '<li id="no-items-found"><h3 class="question">No items found</h3></li>'
);

faqList.on("updated", function (list) {
  if (list.matchingItems.length == 0) {
    $(list.list).append(noItems);
  } else {
    noItems.detach();
  }
});
