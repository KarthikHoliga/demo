from deepeval import assert_test
from deepeval.test_case import LLMTestCase
from deepeval.metrics import AnswerRelevancyMetric, FaithfulnessMetric

def test_refund_answer():
    case = LLMTestCase(
        input="What is our refund policy?",
        actual_output=my_app("What is our refund policy?"),
        retrieval_context=["Refunds are given within 7 days of purchase."],
    )
    assert_test(case, [
        AnswerRelevancyMetric(threshold=0.7),
        FaithfulnessMetric(threshold=0.7),
    ])