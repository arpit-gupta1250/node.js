async function apicall(){
  return "Fetched Data";
}


async function test() {
  let result = await apicall()
  console.log(result)
}

test()