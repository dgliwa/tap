require 'httpi'

class CommentService
  def send(receiver, sender, message)
    request = HTTPI::Request.new
    request.headers['Content-Type'] = 'application/json'
    request.url = "https://api.us1.corvisa.io/sms/"
    request.body = '[{"from_number": "+14143235967","messages": [{"text":  "Beer snob message from ' + sender.phone_number + ': ' + message + '", "callback_url": "http://beer-snob.herokuapp.com/sms_callback", "to_number": "+1' + receiver.phone_number + '" }]}]'
    request.auth.basic("hXv5b8yak2J7otSqMz3cZ", "sZeDjIShpkya.E9fQrMHLBT8w$JKC/t=2")

    HTTPI.post(request)

    true
  end
end
