class PagesController < ApplicationController
  def root
  end

  def fetch_time
    render json: {time: Time.now.to_s}
  end
end
