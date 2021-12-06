// const userAction = async () => {
//     const response = await fetch('https://app.modzy.com/api/results/cccfe49a-5c03-43a2-8ced-99a622c8e081/my-input/results.wav', {
//         method: 'GET',
//         headers: {
//           'Authorization': 'ApiKey 8cCHEh0qohi6W07WGoMh.e3dN9cAzHx8750i9mwd2'
//         }
//       });
//     //const myJson = await response.json(); //extract JSON from the http response
//     // do something with myJson
//     console.log(response);
//   }

let context;
let request;
let source;

function play() {
try {
  context = new AudioContext();
  request = new XMLHttpRequest();
  request.open("GET","https://app.modzy.com/api/results/ee079123-74de-4942-942c-8de1f7f7979f/my-input/results.wav");
  request.setRequestHeader('Authorization', 'ApiKey 8cCHEh0qohi6W07WGoMh.e3dN9cAzHx8750i9mwd2');
  request.responseType = "arraybuffer";

  request.onload = function() {
    
    context.decodeAudioData(request.response, function(buffer) {
      source = context.createBufferSource();
      source.buffer = buffer;
      source.connect(context.destination);
      // auto play
      source.start(0); // start was previously noteOn
    });
  };

  request.send();

} catch(e) {
  alert('Err:  '+ e);
}
}