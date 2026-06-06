const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type Web3FormsValue = string | number | boolean | undefined;
type Web3FormsPayload = Record<string, Web3FormsValue>;

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

export async function submitWeb3Form(payload: Web3FormsPayload): Promise<string> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("Web3Forms access key is not configured.");
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      ...payload,
    }),
  });

  const result = (await response.json()) as Web3FormsResponse;

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Unable to submit the form.");
  }

  return result.message || "Thank you. Your submission has been received.";
}
