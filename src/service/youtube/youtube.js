class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async search() {
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=lalaland&key=AIzaSyDUMBeCMRlTdvxDzhUxolMBKfsWAleEoVc",
      this.requestOptions
    );
    const json = await response.json();
    return json.items;
  }
}

export default Youtube;
