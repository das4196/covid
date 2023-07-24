describe("generating informations from API test complete application-Automated", () => {
  it("should visit URL and the title", () => {
    //Visit access test case
    cy.visit("localhost:3000");

    //assert thr url
    cy.url().should("include", "localhost:3000");

    //assert the title
    cy.title().should("eq", "Covid Tracker- Karlsruhe");
  });

  it("Should click choose city buttons and check if data is fetching", () => {
    cy.get("#dropdownMenuButton1").click();

    //Check if city is loading from fetch
    cy.get(".dropdown-item").each(($el, index, $list) => {
      var place = $el.text();
      if (place == "Bretten") {
        cy.wrap($el).click();
      }
    });
    //Choose the first city button
  });

  it("Gets the choosen text  in label and Checks Initial fetching", () => {
    cy.get(".card-title-show-city").should("have.text", "City : Bretten");
  });

  it("Should check  the routes are valid", () => {
    cy.get("#navbutton").click();
    cy.url().should("include", "localhost:3000/Home");
  });

  it("Should check inputing the dates (From) and (To)", () => {
    cy.get(".input-from").type("2022-01-01");
    cy.get(".input-from").should("have.value", "2022-01-01");

    cy.get(".input-to").type("2022-06-01");
    cy.get(".input-to").should("have.value", "2022-06-01");

    cy.get("#generate-button").click();
    cy.get("#export-button").click();
  });
  it("Should click generate button to generate table and chart", () => {
    cy.get("#generate-button").click();
  });
  it("Should click export button to export document", () => {
    cy.get("#export-button").click();
  });
  it("Should check if Line , bar and area chart functions", () => {
    cy.get("#line").click();
    cy.get("#bar").click();
    cy.get("#area").click();
  });
});
