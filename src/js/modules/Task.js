class Task {
	constructor(name) {
		this.name = name;
		this.isComplteted = null;
	}
	getState() {
		return this.isComplteted;
	}
	setState(state) {
		this.isComplteted = state;
	}
	edit() {

	}
	renderDate(date) {
		const formattedDate = date;
		return formattedDate;
	}
}