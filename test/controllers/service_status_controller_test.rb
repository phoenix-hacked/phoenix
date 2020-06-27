require 'test_helper'

class ServiceStatusControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get service_status_index_url
    assert_response :success
  end

end
