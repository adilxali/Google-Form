import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import BasicSelect from "@/components/BasicSelect.vue";

describe("BasicSelect.vue", () => {
  it("renders options based on the field prop", () => {
    const mockField = [{ id: 1, name: "Option 1" }, { id: 2, name: "Option 2" }];
    const modelValue = "";

    const wrapper = mount(BasicSelect, {
      props: { field: mockField, modelValue },
    });

    const options = wrapper.findAll("option");
    expect(options.length).toBe(mockField.length);
  });

  it("emits the update:modelValue event with the selected value", () => {
    const mockField = [{ id: 1, name: "Option 1" }, { id: 2, name: "Option 2" }];
    const modelValue = "";

    const wrapper = mount(BasicSelect, {
      props: { field: mockField, modelValue },
    });

    const select = wrapper.find("select");
    select.element.value = 2;
    select.trigger("change");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();

  });

  
});
