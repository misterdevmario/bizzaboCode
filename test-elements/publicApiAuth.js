curl --location --request POST 'https://auth.bizzabo.com/oauth/token' \
--header 'Content-Type: application/json' \
--data-raw '{
"client_id": "wIxuG8f5g3TaAO7m0sCuE7ltpm5AdCHp",
"client_secret": "qdBSGVaQrz25NdgwxqV0qBYX_wPOZ36_jTapccYSPA_tO_W8ej5cvi6BNFsNXZhW",
"audience": "https://api.bizzabo.com/api",
"grant_type": "client_credentials",
"account_id": 145306
}'