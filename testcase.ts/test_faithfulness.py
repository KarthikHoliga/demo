from deepeval import assert_test
from deepeval.test_case import LLMTestCase
from deepeval.metrics import FaithfulnessMetric
from app.banking_chatbot import chatbot

retrieval_context = [
    "Reset PIN using an ATM machine.",
    "ATM PIN can be reset via Internet Banking.",
    "A registered mobile number is required for OTP verification.",
    "You can connect with customer support to change the PIN.",
]


def test_faithfulness_metric():
    query = "How can I reset my ATM PIN?"
    response = chatbot(query)
    print(response)

    test_case = LLMTestCase(
        input=query,
        actual_output=response,
        retrieval_context=retrieval_context,
    )

    faithfulness = FaithfulnessMetric(threshold=0.7)
    assert_test(test_case, [faithfulness])