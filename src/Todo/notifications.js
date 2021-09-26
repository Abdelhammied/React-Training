import React from "react";
import Notifications, { notify } from "react-notify-toast";

export const error = (message, timeout = 1000) => {
	notify.show(message, "error", timeout);
};

export const success = (message, timeout = 1000) => {
	notify.show(message, "success", timeout);
};

export default () => {
	return <Notifications />;
};
