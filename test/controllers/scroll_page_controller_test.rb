require "test_helper"

class ScrollPageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get scroll_page_index_url
    assert_response :success
  end
end
