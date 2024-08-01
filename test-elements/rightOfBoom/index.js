
const token = "229eec99-1f70-43d3-b485-7958a408b587";
const eventID = "609158"

async function getPartners(token) {
  
    try {
      const res = await fetch(`https://api.bizzabo.com/api/partners?eventId=${eventID}`, {
        method: "GET",
        headers: {
          Authorization: `bearer ${token}`,
          Accept: "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(`ERROR:`, error);
    }
  
 

 
}




console.time()
getPartners(token);
console.timeEnd()












// curl --location --request POST 'https://auth.bizzabo.com/oauth/token' \
// --header 'Content-Type: application/json' \
// --data-raw '{
// "client_id": "PGs277uyHYYraKXyDXInFbJiTLJBcN4N",
// "client_secret": "ZCTx3ksCqRw8gc5d0CLCwwBrdXsMlNYLYmnOWeB_aYeI2imiFHZgo7EUoA7krFc6",
// "audience": "https://api.bizzabo.com/api",
// "grant_type": "client_credentials",
// "account_id": 198466
// }'