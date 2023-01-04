import pandas as pd

data=pd.read_csv("train_study_level.csv") ## อ่านไฟล์csv
ID = data['id'].tolist()
N = data['Negative_for_Pneumonia'].tolist()
T = data['Typical_Appearance'].tolist()
I = data['Indeterminate_Appearance'].tolist()
A = data['Atypical_Appearance'].tolist()

f = open("testttt.js", "w")
f.write("export const train={")
f.write("id: [")
for id in ID:  
    f.write(" '"+ id +"' " + " , ")
f.write(" ],")
f.write("Negative_for_Pneumonia: [")
for n in N:
    f.write( str(n) + " , ")
f.write(" ],")
f.write("Typical_Appearance: [")
for t in T:
    f.write(str(t) + " , ")
f.write(" ],")
f.write("Indeterminate_Appearance: [")
for i in I:
    f.write(str(i)  + " , ")
f.write(" ],")
f.write("Atypical_Appearance: [")
for a in A:
    f.write(str(a) + " , ")
f.write(" ]")
f.write("};")
f.close()

