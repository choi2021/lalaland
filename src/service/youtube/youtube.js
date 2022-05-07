class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async search(q) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${q}&key=AIzaSyDUMBeCMRlTdvxDzhUxolMBKfsWAleEoVc`,
      this.requestOptions
    );
    const json = await response.json();
    console.log(json);
    return json.items.map((item) => {
      return { ...item, id: item.id.videoId };
    });
  }
}

export default Youtube;
