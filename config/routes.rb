Rails.application.routes.draw do
  class OnlyAjaxRequest
    def matches?(request)
      request.xhr? || Rails.env.development?
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#root'

  # this is a sample axios call used in the functional components firstCard and secondCard
  get 'pages/fetch_time', :as => :fetch_time, :constraints => OnlyAjaxRequest.new
end
