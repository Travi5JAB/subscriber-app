Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

get '*path', to: 'pages#index', constraints: ->(request) { request.format.html? }
root to: "pages#index"
end
