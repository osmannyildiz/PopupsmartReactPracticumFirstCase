export default class HttpClient {
	static activeRequests: AbortController[] = [];

	static async _sendRequest(url: string, options: Object = {}) {
		const abortCtrl = new AbortController();
		this.activeRequests.push(abortCtrl);

		try {
			const resp = await fetch(url, {
				...options,
				signal: abortCtrl.signal,
			});

			this.activeRequests = this.activeRequests.filter(
				(ac) => ac !== abortCtrl
			);

			const respJson = await resp.json();
			return respJson;
		} catch (err) {
			throw err;
		}
	}

	static abortAllRequests() {
		this.activeRequests.forEach((abortCtrl) => abortCtrl.abort());
	}

	static async get(url: string) {
		return await this._sendRequest(url);
	}

	static async post(url: string, body: any) {
		return await this._sendRequest(url, {
			method: "POST",
			body: body,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	static async put(url: string, body: any) {
		return await this._sendRequest(url, {
			method: "PUT",
			body: body,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	static async delete(url: string) {
		return await this._sendRequest(url, {
			method: "DELETE",
		});
	}
}
