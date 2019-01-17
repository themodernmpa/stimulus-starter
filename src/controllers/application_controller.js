import { Controller } from "stimulus";
import { bus, events as busEvents } from "../lib/message_bus";

export const events = busEvents

export class ApplicationController extends Controller {
  initialize() {
    this.subscriptions = []
  }

  publish(event_name, data) {
    bus.publish(event_name, data);
  }

  subscribe(event_name, callback) {
    const subscription = bus.subscribe(event_name, callback);
    this.subscriptions.push(subscription);
  }

  unsubscribe() {
    this.subscriptions.forEach(unsub => unsub())
  }

  disconnect() {
    this.unsubscribe();
  }
}