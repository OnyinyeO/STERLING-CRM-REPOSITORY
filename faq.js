const faq = document.querySelectorAll(".dbod");

const displayFaq = (values) => {
  faq.forEach((element) => {
    element.style.display = "none";
    const question = element.h4.innerHTML.toUpperCase();
    const answer = element.p.innerHTML.toUpperCase();

    if (question.includes(values) || answer.includes(values)) {
      element.style.display = "block";
    }
  });
};
searchb.addEventListener("input", (e) => {
  displayFaq(e.target.value.toUpperCase());
});
