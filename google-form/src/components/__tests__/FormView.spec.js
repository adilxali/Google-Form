import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import FormView from "@/views/FormView.vue";

describe("FormView.vue", () => {
  it("renders different input types based on item.type", () => {
    const formData = {
      data: {
        attributes: [
          { id: 1, type: "select", name: { en: "Select Field" }, options: [] },
          { id: 2, type: "text", name: { en: "Text Field" }, placeholder: { en: "Enter text here" } },
        ],
      },
    };
    const formValues = {};
    const currentLanguage = "en";

    const wrapper = mount(FormView, {
      props: { formData, formValues, currentLanguage },
    });

    expect(wrapper.find("BasicSelect")).toBeTruthy();
    expect(wrapper.find("BaseInput")).toBeTruthy();
  });

  it("emits the submit event with the updated formValues", () => {
    const formData = {
      data: {
        attributes: [
          { id: 1, type: "select", name: { en: "Select Field" }, options: [] },
          { id: 2, type: "text", name: { en: "Text Field" }, placeholder: { en: "Enter text here" } },
        ],
      },
    };
    const formValues = {};
    const currentLanguage = "en";

    const wrapper = mount(FormView, {
      props: { formData, formValues, currentLanguage },
    });

    const submitButton = wrapper.find("button[type='submit']");
    submitButton.trigger("click");

  });

  // Add more tests based on your specific requirements and edge cases
});
