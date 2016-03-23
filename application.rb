require 'json'

class Application < Sinatra::Base
  get '/' do
    erb :index, locals: { screensavers: screensavers }
  end

  private

  def screensavers
    @@_screensavers ||= JSON(File.read('screensavers.json'))['screensavers']
  end
end
