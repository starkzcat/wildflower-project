export interface ToastData {
	visible: boolean;
	title: string;
	message: string;
	icon: string;
}

class ToastManager {
	private state = $state<ToastData>({
		visible: false,
		title: 'Notice',
		message: 'Action completed successfully.',
		icon: 'fa-solid fa-circle-check'
	});

	private timeoutId: ReturnType<typeof setTimeout> | null = null;

	get current() {
		return this.state;
	}

	show(title: string, message: string, icon = 'fa-solid fa-circle-check', duration = 4500) {
		this.state.title = title;
		this.state.message = message;
		this.state.icon = icon;
		this.state.visible = true;

		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}

		if (duration > 0) {
			this.timeoutId = setTimeout(() => {
				this.hide();
			}, duration);
		}
	}

	hide() {
		this.state.visible = false;
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
			this.timeoutId = null;
		}
	}
}

export const toast = new ToastManager();
