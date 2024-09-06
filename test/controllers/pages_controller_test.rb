require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pages_index_url
    assert_response :success
  end

  test "should get load_more" do
    get pages_load_more_url
    assert_response :success
  end
end
