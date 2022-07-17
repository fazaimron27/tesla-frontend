const host_endpoint = "http://localhost:8080/api";

axios
  .get(`${host_endpoint}/teams`, {
    headers: { "Access-Control-Allow-Origin": "*" },
  })
  .then((response) => {
    // console.log(response.data);
    response.data.forEach(function (val) {
      // console.log(val);
      $("#teams").append(`
        <div class="Team">
          <img src="${
            val.avatar || "dist/image/team/def.png"
          }" class="border-8 border-white rounded-full h-auto w-36 mx-auto" />
          <div class="m-4 flex flex-col justify-center">
            <span class="font-bold font-sans text-white text-center">${
              val.role
            }</span>
            <span class="block font-sans text-white text-sm text-center">${
              val.name
            }</span>
            <span class="block font-sans text-white text-sm text-center">${
              val.id_card
            }</span>
          </div>
        </div>
      `);
    });
  })
  .catch((e) => {
    console.log(e);
  });

$("#send").on("click", () => {
  const data = {
    name: $("#name").val(),
    email: $("#email").val(),
    message: $("#message").val(),
  };
  axios
    .post(`${host_endpoint}/messages`, data)
    .then((response) => {
      // console.log(response.data);
      alert("Pesan Terkirim");
    })
    .catch((e) => {
      console.log(e);
    });
});
