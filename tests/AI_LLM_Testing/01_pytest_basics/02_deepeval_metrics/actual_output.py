import os
from deepeval import assert_test
from deepeval.metrics import GEval, AnswerRelevancyMetric
from deepeval.test_case import LLMTestCase, SingleTurnParams

# 1. Metric 1: Faithfulness (Checks if actual output matches retrieval context)
faithfulness_metric = GEval(
    name="Faithfulness",
    criteria="Determine if the actual output aligns with and is supported by the retrieval context.",
    evaluation_params=[
        SingleTurnParams.ACTUAL_OUTPUT,
        SingleTurnParams.RETRIEVAL_CONTEXT,
    ],
    threshold=0.7,
    model="gemini-1.5-flash",
)

# 2. Metric 2: Answer Relevancy (Checks if actual output directly answers the user input)
relevancy_metric = AnswerRelevancyMetric(
    threshold=0.7,
    model="gemini-1.5-flash",
)

# 3. Test Case 1: High quality response (Should Pass both metrics)
def test_refund_answer_success():
    test_case = LLMTestCase(
        input="What is your refund policy?",
        actual_output="We offer a 30-day full refund for all purchase orders.",
        retrieval_context=["Our refund policy guarantees a full refund within 30 days of purchase."],
    )
    # Passes both metrics in a single assertion
    assert_test(test_case, [faithfulness_metric, relevancy_metric])

# 4. Test Case 2: Irrelevant response edge-case (Should Fail Relevancy metric)
def test_refund_answer_irrelevant():
    test_case = LLMTestCase(
        input="What is your refund policy?",
        actual_output="We offer fast shipping options via FedEx and DHL.",
        retrieval_context=["Our refund policy guarantees a full refund within 30 days of purchase."],
    )
    # This will fail the relevancy metric assertion
    assert_test(test_case, [faithfulness_metric, relevancy_metric])