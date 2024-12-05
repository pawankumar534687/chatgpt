// const {Configuration, OpenApi } = require('openai');
// const configuration = new Configuration({apikey: "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"})
// const openai = new OpenAIApi(configuration);

// export async function sendMsgToOpenAI(message) {
//     const res = await openai.createcompletion({
//         model: 'text-davinci-003',
//         prompt: message,
//         temperature: 0.7,
//         max_tokens: 256,
//         top_p:1,
//         frequency_penalty:0,
//         presense_penalty:0,
//     })
//     return res.data.choices[0].text;
// }