exports.get404 = (req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Page Not Found | Local Notes Tracker",
    path: "/404",
  });
};
