import { LightningElement, wire } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
import searchBears from '@salesforce/apex/BearController.searchBears';
export default class BearList extends LightningElement {
	searchTerm = '';
	@wire(searchBears, {searchTerm: '$searchTerm'})
	bears;
	appResources = {
		bearSilhouette: `${ursusResources}/img/standing-bear-silhouette.png`,
	};
	handleSearchTermChange(event) {

		window.clearTimeout(this.delayTimeout);
		const searchTerm = event.target.value;

		this.delayTimeout = setTimeout(() => {
			this.searchTerm = searchTerm;
		}, 300);
	}
	get hasResults() {
		return (this.bears.data.length > 0);
	}
}