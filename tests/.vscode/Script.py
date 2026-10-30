def estimate_tokens(text):

    return len(text) // 4

 

bug_report = "Login fails with 500 error after entering valid credentials. " * 40

tokens = estimate_tokens(bug_report)

price_per_million = 3.00     # example price in USD; check your provider's current price

print(tokens, "tokens, about", round(tokens * price_per_million / 1_000_000, 5), "USD")

 

# Count with code, then let the LLM do the judgement part

results = ["PASS", "FAIL", "PASS", "FAIL", "FAIL"]

failed = results.count("FAIL")                  # exact answer

prompt = f"{failed} tests failed. Group the likely causes from the logs below..."

print(prompt)