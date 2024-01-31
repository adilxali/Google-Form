import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import BaseInput from "@/components/BaseInput.vue";

describe("BaseInput.vue", () => {
  it("renders different input types based on the type prop", () => {
    const type = "email";
    const modelValue = "";

    const wrapper = mount(BaseInput, {
      props: { type, modelValue },
    });

    expect(wrapper.find("input[type='email']")).toBeTruthy();
  });

  it("emits the update:modelValue event with the input value", () => {
    const type = "text";
    const modelValue = "";

    const wrapper = mount(BaseInput, {
      props: { type, modelValue },
    });

    const input = wrapper.find("input");
    input.element.value = "new value";
    input.trigger("input");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")[0][0]).toBe("new value");
  });

  it("applies label color correctly", () => {
    const label = "Test Label";
    const labelColor = "red";
    const modelValue = "";

    const wrapper = mount(BaseInput, {
      props: { label, labelColor, modelValue },
    });

    const labelElement = wrapper.find("label");
    expect(labelElement.element.style.color).toBe("red");
  });

  it("trims input value when using v-model.trim", () => {
    const type = "text";
    const modelValue = "   value with spaces   ";

    const wrapper = mount(BaseInput, {
      props: { type, modelValue },
    });

  });

 
});
