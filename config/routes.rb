Rails.application.routes.draw do
  get 'scroll_page', to: "scroll_page#index"
  resources :scores, only: %i[index update]
  resources :pages, only: %i[index load_more]
  root 'welcome#index'
  get 'pages/load_more'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.

  # Defines the root path route ("/")
  # root "posts#index"
end
