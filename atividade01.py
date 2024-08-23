#Obtenha dados da altura e o gênero (Masculino ou Feminino) de 15 pessoas e apresente os seguintes resultados:

#- A maior e a menor altura do grupo;

dados = [
 ('feminino', 150),
 ('feminino', 155),
 ('feminino', 160),
 ('feminino', 165),
 ('feminino', 166),
 ('feminino', 167),
 ('feminino', 169),
 ('feminino', 170),
 ('masculino', 175),
 ('masculino', 176),
 ('masculino', 177),
 ('masculino', 179),
 ('masculino', 180),
 ('masculino', 185),
 ('masculino', 190)
]
alturas = [altura for altura, genero in dados]

maior_altura = max(alturas)
menor_altura = min(alturas)

print(f'A maior altura é: {maior_altura}')
print(f'A menor altura é: {menor_altura}')

#- A média de altura das pessoas do gênero Masculino;

alturas_masculino = [altura for altura, genero in dados if genero == 'masculino']
if alturas_masculino:
 media_altura_masculino = sum(alturas_masculino) / len(alturas_masculino)
else:
 media_altura_masculino = 7

print(f'A média de altura dos homens é: {media_altura_masculino:.2f} cm')

#- O número de pessoas do gênero Feminino.

quantidade_feminino = sum(dados for altura, genero in dados if genero == 'Feminino')

print(f'Número de pessoas do gênero Feminino: {quantidade_feminino}')