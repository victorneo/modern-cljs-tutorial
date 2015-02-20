(ns modern-cljs.login
  (:require [domina :as dom]
            [domina.events :as ev]))

(defn validate-form []
  (let [email (dom/by-id "email")
        password (dom/by-id "password")]
    (if (and (> (count (dom/value email)) 0)
             (> (count (dom/value password)) 0))
      true
      (do (js/alert "Please complete the form!")
          false))))

(defn ^:export init []
  (when (and js/document
           (aget js/document "getElementById"))
    (ev/listen! (dom/by-id "loginForm") validate-form)))
    ;(let [login-form (.getElementById js/document "loginForm")]
    ;(set! (.-onsubmit login-form) validate-form))))
