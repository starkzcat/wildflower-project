import type { Hat } from '../types/catalogue';
import { toast } from './toast.svelte';

class ModalManager {
	private state = $state<{
		isOpen: boolean;
		hat: Hat | null;
	}>({
		isOpen: false,
		hat: null
	});

	get current() {
		return this.state;
	}

	open(hat: Hat) {
		this.state.hat = hat;
		this.state.isOpen = true;
	}

	close() {
		this.state.isOpen = false;
	}

	async copyLink() {
		if (!this.state.hat) return;
		const refText = `Wildflower Millinery — ${this.state.hat.title} (${this.state.hat.color})`;
		try {
			if (navigator?.clipboard?.writeText) {
				await navigator.clipboard.writeText(refText);
			} else {
				// Fallback
				const tempInput = document.createElement('input');
				tempInput.value = refText;
				document.body.appendChild(tempInput);
				tempInput.select();
				document.execCommand('copy');
				document.body.removeChild(tempInput);
			}
			toast.show('Copied Reference', `Hat specifications copied: "${this.state.hat.title}"`);
		} catch {
			toast.show('Copy Failed', 'Unable to copy reference to clipboard.');
		}
	}
}

export const hatModal = new ModalManager();
