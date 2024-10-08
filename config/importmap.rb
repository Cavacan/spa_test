# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin "hello_controller", to: "controllers/hello_controller.js"
pin "fetch_spa", to: "fetchSpa.js"
pin "scroll_page", to: "scroll_page.js"
pin_all_from "app/javascript/controllers", under: "controllers"
