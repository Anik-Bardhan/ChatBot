from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

bot = ChatBot('Bot')
trainer = ChatterBotCorpusTrainer(bot)

trainer.train(
    "chatterbot.corpus.english",
)

# while True:
#     request = input('You: ')
#     response = bot.get_response(request)
#     print('Bot: ', response)