import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import neumoStyle from "./assets/neumo.css?inline";

/**
 * An neumorphism item.
 *
 * @slot - This element has a slot
 * @csspart slot - The slot
 */
@customElement("neumo-item")
export class NeumoItem extends LitElement {
  /**
   * Whether the element is hollow.
   */
  @property({ type: Boolean })
  hollow = false;

  /**
   * Distance of the element.
   */
  @property()
  set distance(value: string | null) {
    this.style.setProperty("--neumo-item-distance", value);
  }
  get distance() {
    return this.style.getPropertyValue("--neumo-item-distance");
  }

  render() {
    return html` <slot
      class=${classMap({ neumo: true, hollow: this.hollow })}
      part="slot"
    ></slot>`;
  }

  static styles = unsafeCSS(neumoStyle);
}

declare global {
  interface HTMLElementTagNameMap {
    "neumo-item": NeumoItem;
  }
}
